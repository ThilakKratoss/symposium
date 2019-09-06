if(process.env.NODE_ENV === 'production') {
    module.exports = {mongoURI :'mongodb://thilak:thilakal123@ds317808.mlab.com:17808/venussympi'}
}else{
    module.exports = {mongoURI :'mongodb://localhost/sympo'}
}