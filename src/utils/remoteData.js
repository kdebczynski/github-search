export const notInitiated = () => ({
    initiated: false, processing: undefined, data: undefined, error: undefined
});

export const processing = ({ reset = false } = {}) => ({
    initiated: true, processing: true,
    ...( reset ? { data: undefined, error: undefined } : {} )
});

export const success = ({ data } = {}) => ({
    initiated: true, processing: false, data, error: undefined
});

export const error = ({ data, error } = {}) => ({
    initiated: true, processing: false, data, error
});
