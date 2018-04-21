import React, { Component } from 'react'

export default class FooterMenu extends Component {
  render() {
    return (

<footer className="page-footer font-small stylish-color-dark pt-4 mt-4">

<div className="container text-center text-md-left">
    <div className="row">
        <div className="col-md-3 offset-md-1">
            <h4 className="mb-4 mt-3 font-weight-bold">Resurse</h4>
            <ul className="list-unstyled">
                <li>
                    <a href="https://www.participrare.ro" target="_blank" rel="noopener noreferrer">Participrare.ro</a>
                </li>
                <li>
                    <a href="http://edubolirare.ro" target="_blank" rel="noopener noreferrer">Edubolirare.ro</a>
                </li>
                <li>
                    <a href="https://www.eurordis.org/" target="_blank" rel="noopener noreferrer">Eurordis.org</a>
                </li>
                <li>
                    <a href="http://www.orpha.net/" target="_blank" rel="noopener noreferrer">Orpha.net</a>
                </li>
            </ul>
        </div>

        <div className="col-md-4">
            <h4 className="mb-4 mt-3 font-weight-bold">Utile</h4>
            <ul className="list-unstyled">
                <li>
                    <a href="/">Termeni si Conditii</a>
                </li>
                <li>
                    <a href="/">Confidentialitatea Datelor</a>
                </li>
            </ul>
        </div>

        <div className="col-md-4">
            <h4 className="mb-4 mt-3 font-weight-bold">Cum ajung</h4>
            <ul className="list-unstyled">
                <li>
                    <a href="http://mersultrenurilorcfr.ro/imtif/PleSos.aspx?key=qM62Qbw76d4ztPtS7AKTSz8i+qUanlA1qijcCEsRA/h/KYveB+B0ctbauV+Tc33hhPnh8za93y89vRm21SGctGhv3boJGH3mCIy2S9cv8Js=&lng=ro">Mersul Trenurilor</a>
                </li>
                <li>
                    <a href="https://www.google.ro/maps/place/Zal%C4%83u/data=!4m2!3m1!1s0x474842a15ce95f31:0x56c280de3735b817?sa=X&ved=0ahUKEwj4xpzN_cvaAhVO2KQKHaK7DG8Q8gEIwAEwEA">Harta Zalau</a>
                </li>
                <li>
                    <a href="https://www.autogari.ro/Transport/Zalau-ClujNapoca">Autogara</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div className="footer-copyright py-3 text-center">
    © 2018 Copyright:
    <a href="https://scoalainformala.ro/"> WeCare - #challengeaccepted - Hackathon </a>
</div>
</footer>
    )
  }
}
