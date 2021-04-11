const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./comment');

// User Associations
User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Comment, {
  foreignKey:"user_id"
})

// End User Associations
// BlogPost Associations

BlogPost.belongsTo(User, {
  foreignKey: 'user_id',
});


BlogPost.hasMany(Comment, {
  foreignKey: 'post_id',
});

// End BlogPost Associations
// Comment Associations

Comment.belongsTo(User, {
  foreignKey: "user_id"
})

Comment.belongsTo(BlogPost, {
  foreignKey: 'post_id',
});

// End Comment Associations

module.exports = { User, BlogPost, Comment };
