module.exports = {


  friendlyName: 'Delete',


  description: 'Delete user.',


  inputs: {

  },


  exits: {

    forbidden: {
      responseType: 'forbidden'
    }

  },


  fn: async function (inputs, exits) {

    const user = await User.findOne({ id: this.req.session.uid });

    if (!user) return exists.forbidden();

    await User.update({ id: user.id }).set({
      deleted: true
    });

    return exits.success();

  }


};
