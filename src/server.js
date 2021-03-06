import express from 'express';
import bodyPaser from 'body-parser';
import { MongoClient, mongoClient } from 'mongodb';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyPaser.json());

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('my-blog');

        await operations(db);
        
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
}

app.get('/api/articles/:name', async (req, res) => {
        const articleName = req.params.name;
        withDB(
            async (db) => {
                const articleInfo = await db.collection('articles').findOne({ name: articleName });

                res.status(200).json(articleInfo);
            }
        , res);
});

app.post('/api/articles/:name/upvote', async (req, res) => {
        const articleName = req.params.name;
        
        withDB(async (db) => {
            const articleInfo = await db.collection('articles').findOne({ name: articleName });
            
            await db.collection('articles').updateOne({name: articleName}, { 
                '$set': {
                    upvotes: articleInfo.upvotes + 1,
                }, 
            });
            const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
            res.status(200).json(updatedArticleInfo);
        }, res);
});
app.post('/api/articles/:name/downvote', async (req, res) => {
    const articleName = req.params.name;

    withDB(async (db) => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        let newVotes = articleInfo.upvotes - 1;
        if (newVotes < 0) {
            newVotes = 0;
        }
        await db.collection('articles').updateOne({name: articleName}, { 
            '$set': {
                upvotes: newVotes,
            }, 
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    }, res);
});
app.post('/api/articles/:name/add-comment', (req, res) => {
    const articleName = req.params.name;
    const { username, text } = req.body;
    withDB(async (db) => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
            await db.collection('articles').updateOne({name: articleName}, { 
                '$set': {
                    comment: articleInfo.comment.concat({
                        username, text
                    })
                }, 
            });
            const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
            res.status(200).json(updatedArticleInfo);
    }, res);

});

app.post('/api/articles/:name/delete-comments', (req, res) => {
    const articleName = req.params.name;
    withDB(async (db) => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
            await db.collection('articles').updateOne({name: articleName}, { 
                '$set': {
                    comment: [],
                }, 
            });
            const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
            res.status(200).json(updatedArticleInfo);
    }, res);

});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(8000, () => console.log('Listen on port 8000'));