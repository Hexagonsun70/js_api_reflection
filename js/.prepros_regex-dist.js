const inputs = document.querySelectorAll('input');

const patterns = {
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  //         yourname   @   domain   .    com        ( .uk )
  // see regex101.com for reference of all characters
  /*
  ([a-z\d\.-]+) a-z represents alphabet characters, d resembles digits.
  a backslash is an escape character, used so the dot isnt parsed in the syntax,
  the hyphen does not need escaping.the plus sign denotes that any amount of
  characters above 1 is accepted.

  @ next we just have an 'at' symbol

  ([a-z\d-]+) everything here is explained in the first brackets. This is
  the domain such as 'google'

  \. the backslash is used as an escape character here too, to separate the
  domain and domain suffix

  ([a-z]{2,8}) this is the first part of the domain suffix, eg 'com'. the curly
  braces restrict the potential length of the suffix

  (\.[a-z]{2,8})? and finally the back slash once again escapes the dot, the
  question mark dilineates that this is an optional addendum to the suffix, eg
  the .uk of .co.uk
  */
}

// validation function
function validate(field, regex){

  if(regex.test(field.value)){
      field.className = 'valid';
  } else {
      field.className = 'invalid';
  }
  /*
  here the two arguments, 'field' and 'regex' are tested against each other for
  validation. The test method checks if two strings match, and returns true if
  they do. A class is then added to the target field, 'valid' or 'invalid' if
  they do or don't match
  */
}

// attach keyup events to inputs
inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
          // console.log(patterns[e.target.attributes.name.value]);
          validate(e.target, patterns[e.target.attributes.name.value]);
          /*
          THIS REQUIRES INPUT TAG TO HAVE NAME ATTRIBUTE

          Here the validate function is passed two arguments, the event target,
          aka the field argument is compared against the corollary target
          regex from the patterns object. The validate function then assigns
          the target a class of either valid/invalid.
          */
  });
});

//# sourceMappingURL=.prepros_regex-dist.js.map