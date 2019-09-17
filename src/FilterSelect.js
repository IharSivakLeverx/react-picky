import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import classNames from 'classnames';
function FilterSelect({
                        tabIndex,
                        disabled,
                        allSelected,
                        id,
                        selectAllText,
                        toggleSelectAll,
                        visible,
                      }) {
  if (!visible) {
    return null;
  }
  return (
    <label
      tabIndex={tabIndex}
      role='option'
      data-testid='selectall'
      id={id + '-option-' + 'selectall'}
      data-selectall='true'
      aria-selected={allSelected}
      className={allSelected ? 'selected wrapperCheckbox' : 'wrapperCheckbox'}
      onClick={toggleSelectAll}
      disabled={disabled}
      onKeyPress={toggleSelectAll}
      style={{
        width: '100%',
        marginTop: '20px',
        marginLeft: '11px',
      }}
    >
      {selectAllText}
      <input
        type='checkbox'
        readOnly
        data-testid='selectall-checkbox'
        tabIndex={-1}
        checked={allSelected}
        aria-label='select all'
        disabled={disabled}
        className={allSelected ? 'selected' : ''}
        onClick={e => {
          e.stopPropagation();
        }}
      />
      <span data-testid='select-all-text' className='wrapperCheckbox_label' />
    </label>
  );
}

FilterSelect.propTypes = {
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  allSelected: PropTypes.bool,
  id: PropTypes.string.isRequired,
  selectAllText: PropTypes.string,
  toggleSelectAll: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

export default onlyUpdateForKeys([
  'tabIndex',
  'disabled',
  'allSelected',
  'selectAllText',
  'visible',
])(FilterSelect);
