import React from 'react';

const Characters = props => (
  <div className="container">
    <div className="row">
    { props.characters.map((character) => {
          return (
            <div key={character.title} className="col-md-4" style={{ marginBottom:"2rem" }}>
              <div className="character-box">
                <div className="character-container">

                  <img 
                  className="character-image"
                  src={character.image} 
                  alt= { character.name } 
                  />

                  <div className="character-title">
                    <h3 className="character_name">{ character.name }</h3>
                  </div> 

                  <div className="character-description">
                    <div className="house">House:  
                      { character.house == null ? "None" : `${ character.house }`}
                    </div>
                    <div className="species">Species:
                      { character.species }
                    </div>
                    <div className="gender">Gender:
                      { character.gender }
                    </div>
                  </div>

                  <div className="ancestry-description">
                    <div className="wand">Ancestry: {character.ancestry}</div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
    </div>
  </div>
)

export default Characters;