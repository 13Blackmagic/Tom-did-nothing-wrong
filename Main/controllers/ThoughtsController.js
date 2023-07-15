const {Thought, User} = require('../models');

    module.exports = {

        async getThought(req, res) {
            try {
              const Thoughtss = await Thought.find();
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
        
              res.json(Thought);
            } catch (err) {
              res.status(500).json(err);
            }
          },
          
          async createThought(req, res) {
            try {
              const Thought = await Thought.create(req.body);
              const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { Thought: Thought._id } },
                { new: true }
              );
        
              if (!user) {
                return res.status(404).json({
                  message: 'Thought created, but found no user with that ID',
                })
              }
        
              res.json('Created the Thoughts 🎉');
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },
          
          async updateThought(req, res) {
            try {
              const Thought = await Thought.findOneAndUpdate(
                { _id: req.params.ThoughtsId },
                { $set: req.body },
                { runValidators: true, new: true }
              );
        
              if (!Thought) {
                return res.status(404).json({ message: 'No Thoughts with this id!' });
              }
        
              res.json(Thought);
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },
          
          async deleteThought(req, res) {
            try {
              const Thought = await Thought.findOneAndRemove({ _id: req.params.ThoughtsId });
        
              if (!Thought) {
                return res.status(404).json({ message: 'No Thoughts with this id!' });
              }
        
              const user = await User.findOneAndUpdate(
                { Thought: req.params.ThoughtsId },
                { $pull: { Thought: req.params.ThoughtId } },
                { new: true }
              );
        
              if (!user) {
                return res.status(404).json({
                  message: 'Thought created but no user with this id!',
                });
              }
        
              res.json({ message: 'Thought successfully deleted!' });
            } catch (err) {
              res.status(500).json(err);
            }
          },
          
          async addReaction(req, res) {
            try {
              const Thought = await Thought.findOneAndUpdate(
                { _id: req.params.ThoughtsId },
                { $addToSet: { reaction: req.body } },
                { runValidators: true, new: true }
              );
        
              if (!Thought) {
                return res.status(404).json({ message: 'No Thoughts with this id!' });
              }
        
              res.json(Thought);
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },

          async deleteReaction(req, res) {
            try {
              const Thought = await Thought.findOneAndUpdate(
                { _id: req.params.ThoughtsId },
                { $pull: { reaction: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
              );
        
              if (!Thought) {
                return res.status(404).json({ message: 'No Thoughts with this id!' });
              }
        
              res.json({ message: 'Successfully deleted the reaction!' });
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          }
        };
        

