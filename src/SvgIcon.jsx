import React from 'react';
import classNames from 'classnames';

export default function SvgIcon(props = {}) {
    const name = props.name;
    if (!name) {
        return null;
    }

    const iconClass = props.iconClass || 'icon';
    const otherAttr = Object.assign({}, props);

    delete otherAttr.name;
    delete otherAttr.className;
    delete otherAttr.iconClass;

    return (
        <svg
            className={classNames(
                iconClass,
                iconClass + '_' + name,
                props.className,
            )}
            {...otherAttr}
        >
            <use xlinkHref={`#${props.name}`} />
        </svg>
    );
}
