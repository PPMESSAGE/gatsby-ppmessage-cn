import React from 'react'
import Link from 'gatsby-link'

import EnterYourMobile from "../components/enteryourmobile"
import NavDropdown from "../components/navdropdown"

const IndexPage = () => (
    <div>
        <EnterYourMobile size={"small"} />
        <EnterYourMobile size={"middle"} />
        <EnterYourMobile size={"large"} />


        <NavDropdown title={"products"}>
            <div>
                <a href="https://www.intercom.com/messages">
                    <div></div>
                    <div>
                        <div>Messages</div>
                        <div>Send targeted messages to the right people at the right time</div>
                    </div>
                </a>
                <div></div>
                <a href="https://www.intercom.com/inbox">
                    <div></div>
                    <div>
                        <div>Inbox</div>
                        <div>Manage conversations with leads and customers at scale</div>
                    </div>
                </a>
                <div></div>
                <a href="https://www.intercom.com/articles">
                    <div ></div>
                    <div >
                        <div >Articles</div>
                        <div >Create and publish help content to a public knowledge base</div>
                    </div>
                </a>
                <div ></div>
                <div ></div>
                <div ></div>
                <div>
                    All products are built on the free
                    <br/>
                    <a href="https://www.intercom.com/customer-intelligence">Intercom Platform →</a>
                </div>
            </div>
        </NavDropdown>



        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
    </div>
)

export default IndexPage
