module.exports = {


  friendlyName: 'Create',


  description: 'Create session.',


  inputs: {

    email: {
      required: true,
      type: 'string',
      isEmail: true,
    },

    password: {
      required: true,
      type: 'string',
      maxLength: 200,
    },

  },


  exits: {

    invalid: {
      responseType: 'badRequest',
      description: 'The provided password and/or email address are invalid.',
    },

  },


  fn: async function (inputs, exits) {

    const email = inputs.email.toLowerCase();
    const user = await User.findOne({ email });

    if (!user) return exits.invalid();

    await sails.helpers.passwords.checkPassword(inputs.password, user.password).intercept('incorrect', 'invalid');

    this.req.session.uid = user.id;

    return exits.success();

  }


};
