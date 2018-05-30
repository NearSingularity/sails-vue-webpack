module.exports = {


  friendlyName: 'Create',


  description: 'Create user.',


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
    },

    emailTaken: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },

  },


  fn: async function (inputs, exits) {


    return exits.success();

  }


};
