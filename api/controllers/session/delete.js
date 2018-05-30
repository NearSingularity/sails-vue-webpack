module.exports = {


  friendlyName: 'Delete',


  description: 'Delete session.',


  inputs: {

  },


  exits: {

    forbidden: {
      responseType: 'forbidden'
    }

  },


  fn: async function (inputs, exits) {

    // const user = await User.findOne({ id: this.req.session.uid })
    // if (!user) return exists.forbidden();

    delete this.req.session.uid

    return exits.success();

  }


};
