(function() {
     function SongPlayer(Fixtures) {
          var SongPlayer = {};
         
         
          /**
            * @desc to store album information
            * @type {Object}
         */
          var currentAlbum = Fixtures.getAlbum();
         
          
         /**
         * @desc Buzz object audio file
         * @type {Object}
         */
          var currentBuzzObject = null;
         
         
          //set a song
           /**
            * @function setSong
            * @desc Stops currently playing song and loads new audio file as currentBuzzObject
            * @param {Object} song
            */
          var setSong = function(song) {
              
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }
 
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
 
            SongPlayer.currentSong = song;
        };
         
         
        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        }; 
        
         
        /**
            * @desc Active song object from list of songs
            * @type {Object}
        */ 
        SongPlayer.currentSong = null;
         
         /**
            @desc playing current audio file (buzz object)
            @type {object}
         */
         var playSong = function(song) {
             currentBuzzObject.play(); 
             song.playing = true;
         };
         
         
          //play a song
        SongPlayer.play = function(song) {
             song = song || SongPlayer.currentSong;
              
             if (SongPlayer.currentSong !== song) { 
                setSong(song);
                playSong(song);
             
             } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
             } 
              
        };
         
         
          //pause a song
          SongPlayer.pause = function(song) {
                song = song || SongPlayer.currentSong;
                currentBuzzObject.pause();
                song.playing = false;
          };
         
         
          /**
            * @function previous
            * @desc Playing previous song, using song index
            * @type {Object}
          */ 
          SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
              
            if (currentSongIndex < 0) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
              
          };
         
        
              
          return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();