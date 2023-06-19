import * as React from 'react';

import * as SelectParts from './SelectParts';
import { Box } from '../Box';
import { Field, FieldError, FieldHint, FieldLabel } from '../Field';
import { Flex } from '../Flex';
import { stripReactIdOfColon } from '../helpers/strings';
import { useId } from '../hooks/useId';
import { useIntersection } from '../hooks/useIntersection';
import { Typography } from '../Typography';

export type SingleSelectProps = Omit<SelectParts.SingleSelectProps, 'value'> &
  Pick<SelectParts.TriggerProps, 'clearLabel' | 'onClear' | 'size' | 'startIcon' | 'placeholder'> & {
    /**
     * @default (value) => value.toString()
     */
    customizeContent?(value?: string | number): string;
    error?: string | boolean;
    hint?: string | React.ReactNode | React.ReactNode[];
    id?: string | number;
    label: string;
    labelAction?: React.ReactElement;
    onChange?: (value: string | number) => void;
    onReachEnd?: (entry: IntersectionObserverEntry) => void;
    /**
     * @preserve
     * @deprecated This prop is no longer required and will be removed in v2 of the DS.
     * It has no effect on the component.
     */
    selectButtonTitle?: string;
    value?: string | number | null;
  };

export const SingleSelect = ({
  error,
  hint,
  id,
  label,
  labelAction,
  required,
  selectButtonTitle: _deprecatedSelectButtonTitle,
  ...restProps
}: SingleSelectProps) => {
  const generatedId = useId(id);

  /**
   * Because the trigger needs to be a `div` to allow the clear
   * button & tags to be clickable, we need to manually focus it.
   */
  const triggerRef = React.useRef<HTMLDivElement>(null!);

  const handleFieldLabelClick = () => {
    triggerRef.current.focus();
  };

  return (
    <Field hint={hint} error={error} id={generatedId} required={required}>
      <Flex direction="column" alignItems="stretch" gap={1}>
        <FieldLabel onClick={handleFieldLabelClick} action={labelAction}>
          {label}
        </FieldLabel>
        <SingleSelectInput label={label} id={generatedId} triggerRef={triggerRef} required={required} {...restProps} />
        <FieldHint />
        <FieldError />
      </Flex>
    </Field>
  );
};

export interface SingleSelectInputProps extends Omit<SingleSelectProps, 'label' | 'labelAction' | 'hint' | 'id'> {
  id?: string;
  triggerRef?: React.RefObject<HTMLDivElement>;
  label?: string;
}

export const SingleSelectInput = ({
  id,
  children,
  clearLabel = 'Clear',
  customizeContent,
  disabled,
  error,
  label,
  onChange,
  onClear,
  onReachEnd,
  placeholder,
  required,
  selectButtonTitle: _deprecatedSelectButtonTitle,
  startIcon,
  size = 'M',
  value: passedValue,
  triggerRef,
  ...restProps
}: SingleSelectInputProps) => {
  /**
   * These values are drawn out from the internals of the Radix component
   * We can then use them to react to visual changes for the component
   */
  const [internalValue, setInternalValue] = React.useState<string>();
  const [internalIsOpen, setInternalIsOpen] = React.useState(false);

  const handleOpenChange: SelectParts.SelectProps['onOpenChange'] = (open) => {
    setInternalIsOpen(open);
  };

  const handleOnClear = (e) => {
    if (onClear) {
      onClear(e);
    }

    if (!onChange) {
      setInternalValue('');
    }
  };

  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;

  const handleValueChange = (value: string) => {
    /**
     * If it's being externally managed then we shouldn't
     * both setting our copy of the internal value.
     */
    if (onChange) {
      const shouldBeNumber = typeof passedValue === 'number';
      onChange(shouldBeNumber ? Number(value) : value);
    } else {
      setInternalValue(value);
    }
  };

  const viewportRef = React.useRef<HTMLDivElement>(null);
  const generatedIntersectionId = useId();
  const intersectionId = `intersection-${stripReactIdOfColon(generatedIntersectionId)}`;

  const handleReachEnd = (entry: IntersectionObserverEntry) => {
    if (onReachEnd) {
      onReachEnd(entry);
    }
  };

  useIntersection(viewportRef, handleReachEnd, {
    selectorToWatch: `#${intersectionId}`,
    /**
     * We need to know when the select is open because only then will viewportRef
     * not be null. Because it uses a portal that (sensibly) is not mounted 24/7.
     */
    skipWhen: !internalIsOpen,
  });

  const value =
    (typeof passedValue !== 'undefined' && passedValue !== null ? passedValue.toString() : internalValue) ?? '';

  return (
    <SelectParts.Root
      onOpenChange={handleOpenChange}
      disabled={disabled}
      required={required}
      onValueChange={handleValueChange}
      value={value}
      {...restProps}
    >
      <SelectParts.Trigger
        ref={triggerRef}
        aria-label={label}
        aria-describedby={id ? `${hintId} ${errorId}` : undefined}
        id={id}
        startIcon={startIcon}
        size={size}
        hasError={Boolean(error)}
        disabled={disabled}
        clearLabel={clearLabel}
        onClear={value && onClear ? handleOnClear : undefined}
      >
        <SelectParts.Value placeholder={placeholder} textColor={value ? 'neutral800' : 'neutral600'}>
          {value && customizeContent ? customizeContent(value) : undefined}
        </SelectParts.Value>
      </SelectParts.Trigger>
      <SelectParts.Portal>
        <SelectParts.Content position="popper" sideOffset={4}>
          <SelectParts.Viewport ref={viewportRef}>
            {children}
            <Box id={intersectionId} width="100%" height="1px" />
          </SelectParts.Viewport>
        </SelectParts.Content>
      </SelectParts.Portal>
    </SelectParts.Root>
  );
};

/* -------------------------------------------------------------------------------------------------
 * SingleSelectOption
 * -----------------------------------------------------------------------------------------------*/

export interface SingleSelectOptionProps extends Omit<SelectParts.ItemProps, 'value'> {
  startIcon?: React.ReactNode;
  value: string | number;
}

export const SingleSelectOption = React.forwardRef<HTMLDivElement, SingleSelectOptionProps>(
  ({ value, startIcon, children, ...restProps }, ref) => {
    return (
      <SelectParts.Item ref={ref} value={value.toString()} {...restProps}>
        {startIcon && (
          <Box as="span" aria-hidden>
            {startIcon}
          </Box>
        )}
        <Typography textColor="neutral800">
          <SelectParts.ItemText>{children}</SelectParts.ItemText>
        </Typography>
      </SelectParts.Item>
    );
  },
);