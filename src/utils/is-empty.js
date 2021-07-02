/**
 * A lightweight clone of the Lodash function.
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default (obj) => [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length
