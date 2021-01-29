let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const Lotr = require('../db').import('../models/lotr');

router.post('/create', validateSession, (req, res) => {
    const bookPost = {
        bookTitle: req.body.lotr.bookTitle,
        date: req.body.lotr.date,
        synopsis: req.body.lotr.synopsis,
        rating: req.body.lotr.rating,
        owner: req.user.id
    }
    Lotr.create(bookPost)
    .then(book => res.status(200).json(book))
    .catch(err => res.status(500).json({ error: err }))
});

router.get('/', validateSession, (req,res) => {
    Lotr.findAll()
    .then(book => res.status(200).json(book))
    .catch(err => res.status(500).json({ error: err }))
});

router.get('/:title', (req, res) => {
    let title = req.params.title;

    Lotr.findAll({
        where: { title: title }
    })
    .then(book => res.status(200).json(book))
    .catch(err => res.status(500).json({ error: err }))
});

router.put('/:id', validateSession, (req,res) => {
    const updateBookPost = {
    bookTitle: req.body.lotr.bookTitle,
    date: req.body.lotr.date,
    synopsis: req.body.lotr.synopsis,
    rating: req.body.lotr.rating,
    };
    const query = { where: { id: id, owner: req.user.id } };

    Lotr.update(updateBookPost, query)
    .then((book) => res.status(200).json())
    .catch((err) => res.status(500).json({ error: err }));
});

router.delete('/:id', validateSession, (req, res) => {
    const query = { where: { id: req.params.id, owner: req.user.id } };

    Lotr.destroy(query)
    .then(() => res.status(200).json({ message: 'Its gone! Its done!'}))
    .catch((err) => res.status(500).json({ error: err }))
});

module.exports = router;