const {user, Thought} = require('../models');

module.exports = {
    async getReaction(req, res) {
        try {
            const reactions = await Reaction.find();
            res.json(reactions);
            }
            catch (err) {
                res.status(500).json(err);
            }
        },
        async getSingleReaction(req, res) {
            try {
                const reaction = await Reaction.findOne({ _id: req.params.reactionId });
                if (!reaction) {
                    return res.status(404).json({ message: 'No reaction with that ID' });
                }
                res.json(reaction);
            }
            catch (err) {
                res.status(500).json(err);
            }
        },
        async createReaction(req, res) {
            try {
                const reaction = await Reaction.create(req.body);
                const user = await User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { reaction: reaction._id } },
                    { new: true }
                );
                if (!user) {
                    return res.status(404).json({
                        message: 'reaction created, but found no user with that ID',
                    })
                }
                res.json('Created the reaction 🎉');
            }
            catch (err) {
                console.log(err);
                res.status(500).json(err);
            }
        }
    }
        async deleteThought(req, res) {
            try {
              const Thought = await Thought.findOneAndDelete({ _id: req.params.ThoughtsId });

              if (!Thought) {
                return res.status(404).json({ message: 'No Thoughts with that ID' });
              }

              await User.findOneAndUpdate(
                { _id: Thought.userId },
                { $pull: { Thoughts: Thought._id } }
                );
                res.json({ message: 'Thought deleted!' });
                } catch (err) {
                console.log(err);
                res.status(500).json(err);
                }
            };

