const socialNetworks = ['youtube', 'instagram', 'facebook', 'twitter'];

const logArrayInfo = (socialNetworks, index, array) => {
    console.log(index, socialNetworks, array);
}

socialNetworks.forEach(logArrayInfo);