import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleWare from 'webpack-hot-middleware';
import { port, env } from './config/config';
import webpackConfig from '../../webpack.config';

const app = express();

// env config 
const mode = env || 'development';
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../../public')));

// webpack hot middleware server for dev mode
if (mode === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true,
    stats: {
      colors: true,
    },
  }));

  app.use(webpackHotMiddleWare(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
}

app.get('/', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../../public/index.html'))
);

app.all('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../../public/index.html'))
);

app.listen(PORT, function() {
  console.log('server started on', PORT);
});

