module: {
    rules: [
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader',
                {
                    loader: 'sass-resources-loader',
                    options: {
                        // './src/styles/variables.scss', './src/styles/mixins.scss',
                        resources: ['./src/styles/test.scss'],
                    },
                },
            ],
        },
    ];
}
