const {Thoughts, User} = require('../models');

    module.exports = {

        async getThoughts(req, res) {
            try {
              const Thoughtss = await Thoughts.find();
              res.json(Thoughtss);
            } catch (err) {
              res.status(500).json(err);
            }
          },
          
          async getSingleThought(req, res) {
            try {
              const Thoughts = await Thoughts.findOne({ _id: req.params.ThoughtsId });
        
              if (!Thoughts) {
                return res.status(404).json({ message: 'No Thoughts with that ID' });
              }
        
              res.json(Thoughts);
            } catch (err) {
              res.status(500).json(err);
            }
          },
          
          async createThoughts(req, res) {
            try {
              const Thoughts = await Thoughts.create(req.body);
              const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { Thoughtss: Thoughts._id } },
                { new: true }
              );
        
              if (!user) {
                return res.status(404).json({
                  message: 'Thoughts created, but found no user with that ID',
                })
              }
        
              res.json('Created the Thoughts 🎉');
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },
          
          async updateThoughts(req, res) {
            try {
              const Thoughts = await Thoughts.findOneAndUpdate(
                { _id: req.params.ThoughtsId },
                { $set: req.body },
                { runValidators: true, new: true }
              );
        
              if (!Thoughts) {
                return res.status(404).json({ message: 'No Thoughts with this id!' });
              }
        
              res.json(Thoughts);
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },
          
          async deleteThoughts(req, res) {
            try {
              const Thoughts = await Thoughts.findOneAndRemove({ _id: req.params.ThoughtsId });
        
              if (!Thoughts) {
                return res.status(404).json({ message: 'No Thoughts with this id!' });
              }
        
              const user = await User.findOneAndUpdate(
                { Thoughtss: req.params.ThoughtsId },
                { $pull: { Thoughtss: req.params.ThoughtsId } },
                { new: true }
              );
        
              if (!user) {
                return res.status(404).json({
                  message: 'Thoughts created but no user with this id!',
                });
              }
        
              res.json({ message: 'Thoughts successfully deleted!' });
            } catch (err) {
              res.status(500).json(err);
            }
          },
          
          async addTag(req, res) {
            try {
              const Thoughts = await Thoughts.findOneAndUpdate(
                { _id: req.params.ThoughtsId },
                { $addToSet: { tags: req.body } },
                { runValidators: true, new: true }
              );
        
              if (!Thoughts) {
                return res.status(404).json({ message: 'No Thoughts with this id!' });
              }
        
              res.json(Thoughts);
            } catch (err) {
              res.status(500).json(err);
            }
          },
          
          async removeTag(req, res) {
            try {
              const Thoughts = await Thoughts.findOneAndUpdate(
                { _id: req.params.ThoughtsId },
                { $pull: { tags: { tagId: req.params.tagId } } },
                { runValidators: true, new: true }
              );
        
              if (!Thoughts) {
                return res.status(404).json({ message: 'No Thoughts with this id!' });
              }
        
              res.json(Thoughts);
            } catch (err) {
              res.status(500).json(err);
            }
          },
        };
        

