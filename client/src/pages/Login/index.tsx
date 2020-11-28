import React from 'react';
import './index.scss';

const LoginPage = () => {

    const onSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event)
    }, [])

    return (
        <div className="LoginPage">
            <form className="LoginPage__form" onSubmit={onSubmit}>
                <label>
                    Nom :
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
}

export default LoginPage;