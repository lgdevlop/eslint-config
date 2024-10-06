let abcMap = ['a'].reduce((acc, item, index) => {
    return (acc[item] = index)
}, {})
