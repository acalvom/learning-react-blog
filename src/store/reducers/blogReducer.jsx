const initState = {
    entries: [
        {id: 0, author: "acalvom", title: "Welcome", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat accumsan tellus, vel imperdiet elit tempor vel. Integer scelerisque vulputate arcu, non pellentesque diam congue facilisis. Donec a aliquet velit. Aliquam feugiat velit a enim varius dapibus. Sed in ex sagittis, posuere enim sit amet, ullamcorper leo. Integer in augue iaculis, feugiat neque in, laoreet est. Donec ullamcorper mi sit amet consectetur vestibulum. Donec laoreet vitae nisi eget lobortis.\n\nCurabitur ut lobortis turpis. Mauris sed scelerisque justo. Vestibulum maximus libero quam. Curabitur elementum lectus nulla, iaculis finibus velit dictum at. Integer porttitor eget massa ac accumsan. Nulla quis diam in diam aliquam aliquet a non purus. Nam auctor mauris quis faucibus faucibus. Ut suscipit placerat sapien et facilisis. Cras sed placerat purus, ac dapibus nisi. Integer quis augue malesuada, faucibus nisl eget, efficitur nibh. In sapien nulla, suscipit ut tempus ac, fermentum eget eros. Nulla cursus tristique felis. Cras tempus leo ut risus dignissim, quis vulputate diam semper. Phasellus blandit, nisl vitae feugiat consectetur, sapien purus pellentesque orci, eget euismod dolor nibh sit amet nibh. Maecenas pharetra purus ac accumsan lacinia. "},
        {id: 1, author: "acm", title: "Hello", content: "Etiam in volutpat neque. Proin sodales sem justo, sed varius mauris condimentum consectetur. Ut et orci et leo scelerisque convallis. Integer vel magna felis. Etiam eu tincidunt lorem. Proin at varius tellus. Curabitur ipsum turpis, pellentesque quis dictum vel, tristique at purus. Sed nulla nunc, molestie et sollicitudin in, porttitor at turpis. Nullam vitae porttitor ipsum. Sed lobortis viverra elit in imperdiet. Nullam porttitor, lectus ac mattis pretium, enim erat commodo ante, ut pretium felis mauris aliquam sapien. Ut tempor at est eu viverra. Nulla pellentesque odio non nulla accumsan aliquam. Nulla facilisi.\n\nPellentesque vitae ultrices leo. Proin bibendum dui nec laoreet ullamcorper. Suspendisse nec pretium nulla, id imperdiet orci. Praesent quis velit sit amet justo luctus feugiat nec eu risus. Donec laoreet euismod sollicitudin. Phasellus euismod mollis efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut consequat sem sit amet metus fermentum, non facilisis ante blandit. "},
        {id: 2, author: "acalvom", title: "What's up", content: "Aliquam non elit at augue auctor bibendum vel nec magna. Pellentesque eget ornare purus, non tempor dui. Aenean iaculis nunc eu ultricies vehicula. Morbi congue sed metus et molestie. Quisque congue dictum aliquam. Aliquam erat volutpat. Aenean venenatis dictum mauris sed sodales. Aliquam eget tortor ut eros ullamcorper interdum nec sed nunc. Pellentesque eget condimentum dolor. Quisque sed convallis augue."}
    ]
}

const blogReducer = (state = initState, action) => {
    if (action.type === 'ADD_ENTRY'){
        return {
            ...state,
            entries: [...state.entries, action.payload]
        }
    }
    return state;
};

export default blogReducer;
