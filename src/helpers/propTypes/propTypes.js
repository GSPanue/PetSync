export const allowNullPropType = (wrappedPropTypes) => {
    return (props, propName, ...rest) => {
        if (props[propName] === null) {
            return null;
        }

        return wrappedPropTypes(props, propName, ...rest);
    }
};
