import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }) {
    // Toda vez que é alterado o estado do componente, ele será renderizado novamente
    // Quando é executado o setLatitude ou setLongitude, os valores de latitude e longitude
    // serão alterarados, e possuem a propriedade de estado, o render será executado novamente
    // com as alterações 
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGithub_username] = useState('');
    const [techs, setTechs] = useState('');

    // useEffect serve disparar uma função, toda vez que uma informação alterar
    // Se o 2 parametro (que é um vetor), estiver vazio, a função irá executar 1 vez
    // Caso colocar uma variável: [variável], toda vez que a variável estiver seu valor
    // alterado, a função será chamada
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000
            }
        );
    }, []);

    async function handleSubmit(event) {
        event.prevenDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });


        setGithub_username('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input
                    name="github_username"
                    id="github_username"
                    required
                    value={github_username}
                    onChange={e => setGithub_username(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input
                    name="techs"
                    id="techs"
                    required
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">latitude</label>
                    <input
                        type="number"
                        name="latitude"
                        id="latitude"
                        required
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="longitude">latitude</label>
                    <input
                        type="number"
                        name="longitude"
                        id="longitude"
                        required
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    />
                </div>
            </div>

            <button type="submit">Salvar</button>
        </form>
    )
}

export default DevForm;