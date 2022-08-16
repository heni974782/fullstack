module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    // creat the 1 to N relation between the posts and the comments 
    Posts.associate = (models) =>{
        Posts.hasMany(models.Comments, {
            onDelete : "cascade",
        })
    }

    return Posts; //object to return of this model

}