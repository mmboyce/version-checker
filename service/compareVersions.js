/**
 *
 *
 * @param {string} versionNumber1 The version number to compare to the second one.
 * @param {string} versionNumber2 The version to be compared to the second one.
 * @returns {string} Either "before", "equal", or "after" representing versionNumber1's
 *                   comparision to versionNumber2
 */
const compareVersions = (versionNumber1, versionNumber2) => {
  const responses = {
    before: 'before',
    equal: 'equal',
    after: 'after',
  };

  // validate format
  const formatValidationRegEx = /^\d+(?:\.\d+)*$/;

  if (!(formatValidationRegEx.test(versionNumber1)
    && formatValidationRegEx.test(versionNumber2))) {
    const error = new Error(
      '400: Version numbers must only contain digits and periods, with no consecutive periods',
    );

    throw error;
  }

  const splitVersionNumber1 = versionNumber1.split('.');
  const splitVersionNumber2 = versionNumber2.split('.');

  const length1 = splitVersionNumber1.length;
  const length2 = splitVersionNumber2.length;

  const maxLength = length1 > length2 ? length1 : length2;

  // adjusting for different lengths of verison numbers
  for (let i = 0; i < maxLength; i += 1) {
    if (splitVersionNumber1[i] === undefined) {
      splitVersionNumber1[i] = 0;
    }

    if (splitVersionNumber2[i] === undefined) {
      splitVersionNumber2[i] = 0;
    }
  }

  for (let i = 0; i < maxLength; i += 1) {
    if (splitVersionNumber1[i] > splitVersionNumber2[i]) {
      return responses.after;
    }

    if (splitVersionNumber1[i] < splitVersionNumber2[i]) {
      return responses.before;
    }
  }

  return responses.equal;
};

exports.compareVersions = compareVersions;
