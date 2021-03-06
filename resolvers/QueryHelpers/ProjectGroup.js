module.exports = {
  async projectGroup(parent, args, ctx, info) {
    return await ctx.prisma.projectGroup({ ...args.where }, info);
  },
  //   users: forwardTo("prisma")
  async projectGroups(parent, args, ctx, info) {
    return await ctx.prisma.projectGroups({ ...args.where }, info);
  }
};
