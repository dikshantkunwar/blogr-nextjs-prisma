import prisma from '../../../lib/prisma';

// DELETE /api/post/:id
export default async function handle(req, res) {
  const postId = req.query.id;
  if (req.method === 'DELETE') {
    const post = await prisma.post.delete({
      where: { id: Number(postId) },
    });
    res.json(post);
  } else if (req.method === 'PUT') {
    //Unpublish 
    const postId = req.query.id;
    const post = await prisma.post.update({
      where: {id: Number(postId) },
      data: { published: false },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}