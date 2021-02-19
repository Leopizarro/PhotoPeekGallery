import React from 'react';
import { Link } from "react-router-dom";
 
const SignIn = ({ setSignedIn }) => {

    return (
        <article className="br4 ba bg-dark-gray b--black-15 mv4 w-100 w-50-m w-25-l mw5 center shadow-3">
            <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="username">Username</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username"  id="username" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me </label>
                        </fieldset>
                        <div className="">
                            <Link to='/spraypaint'>
                            <input className="b ph3 pv2 input-reset ba b--black bg-light-purple grow pointer f6 dib" onClick= {() => setSignedIn('true')} type="submit" value="Sign in" />
                            </Link>
                        </div>
                    </div>
            </main>
        </article>

    )
}

export default SignIn;