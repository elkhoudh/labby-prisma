module.exports = {
  async createProductRole(parent, args, ctx, info) {
    const postBody = { ...args.data };
    const productRole = await ctx.prisma.createProductRole(postBody, info);
    return productRole;
  },
  async updateProductRole(parent, args, ctx, info) {
    const postBody = { ...args.data };
    delete postBody.id;
    const productRole = await ctx.prisma.updateProductRole(
      {
        data: postBody,
        where: { ...args.where }
      },
      info
    );
    return productRole;
  },
  async deleteProductRole(parent, args, ctx, info) {
    const id = args.data.id;
    const productRole = await ctx.prisma.deleteProductRole(
      {
        ...args.where
      },
      info
    );
    return productRole;
  }
};
