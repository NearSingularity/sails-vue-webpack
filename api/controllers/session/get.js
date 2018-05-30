module.exports = {


  friendlyName: 'Get',


  description: 'Get session.',


  inputs: {

  },


  exits: {

    forbidden: {
      responseType: 'forbidden'
    }

  },


  fn: async function (inputs, exits) {

    const user = await User.findOne({ id: this.req.session.uid })

    if (!user) return exists.forbidden();

    return exits.success({ user });

  }


};
