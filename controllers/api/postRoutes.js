const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const delPost = await BlogPost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!delPost) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(delPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/', withAuth, async (req, res) => {
  try {
    const updatePost = await BlogPost.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    res.json(updatePost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
