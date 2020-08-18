module.exports = {
    presets: ['@vue/app'],
    plugins: [
        [
            'component',
            {
                // 按需引入elementui
                libraryName: 'element-ui',
                styleLibraryName: 'theme-chalk'
            }
        ]
    ]
};
