import axios from 'axios';

export default axios.create({

    baseURL:'http://www.omdbapi.com/?i=tt3896198&apikey=335bb18e',

    headers: {
        Authorization : 'Bearer RuJFoHHunP8DqJrvDj6oGm_i1YLqXmW0of53WAjpu-C3R0oznGNTLQxp8AOLyEIdHj1Ats9esvXzG4lMCr14bYefZzVkauHiSszx0k8okM-CT-T6nc4VG60JlKmZXnYx'

    }

});
