/**
 * CCI 1.5 One Away
 * Determine if a string is "one away" from another due to inserting, removing, or replacing a single character.
 * Example: oneaway('pale', 'pales') => true (insert a single character)
 * Example: oneaway('pale', 'pal') => true (delete a single character)
 * Example: oneaway('pale', 'pare') => true (replace a single character)
 * Example: oneaway('pale', 'pale') => false (no characters changed)
 */


export function insertp(str1, str2) {
  if (str1.length + 1 !== str2.length) {
    return false;
  }
  let diffs = 0;
  let str1_ptr = 0;
  let str2_ptr = 0;
  while (str2_ptr < str2.length) {
    if (str1[str1_ptr] !== str2[str2_ptr]) {
      diffs++;
      str2_ptr++;
    } else {
      str1_ptr++;
      str2_ptr++;
    }
  }
  return (diffs === 1);
}

export function removep(str1, str2) {
  if (str1.length - 1 !== str2.length) {
    return false;
  }
  let diffs = 0;
  let str1_ptr = 0;
  let str2_ptr = 0;
  while (str1_ptr < str1.length) {
    if (str1[str1_ptr] !== str2[str2_ptr]) {
      diffs++;
      str1_ptr++;
    } else {
      str1_ptr++;
      str2_ptr++;
    }
  }
  return (diffs === 1);
}

export function replacep(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let diffs = 0;
  let str1_ptr = 0;
  let str2_ptr = 0;
  while (str1_ptr < str1.length) {
    if (str1[str1_ptr] !== str2[str2_ptr]) {
      diffs++;
    }
    str1_ptr++;
    str2_ptr++;
  }
  return (diffs === 1);
}
