import React from 'react'
import './Skills.css'
import { Card, CardDeck, Button } from 'react-bootstrap';

function Skills() {
    return (
        <div className="container">
            <h2 className="skills">Skills
                <CardDeck className="card__deck">
                    <Card className="card">
                        <Card.Img variant="top" src="https://1.bp.blogspot.com/-k6sMEsF31G8/Vss5FCL0_zI/AAAAAAAAACM/pWpHn_ZXMtw/s1600/HTML5-CSS3.png" />
                        <Card.Body>
                            <Card.Title>HTML & CSS</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                        
                        <Card.Footer>
                            <meter className="meter"
                                min="0" max="100"
                                low="30" high="50"
                                value="100">
                            </meter>
                        </Card.Footer>
                        <Button variant="outline-success">Success</Button>{' '}
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
                        <Card.Body>
                            <Card.Title>JAVASCRIPT</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <meter className="meter"
                                min="0" max="100"
                                low="30" high="50"
                                value="100">
                            </meter>
                        </Card.Footer>
                        <Button variant="outline-success">Success</Button>{' '}
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="data:image/png;base64,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" />
                        <Card.Body>
                            <Card.Title>BOOTSTRAP</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <meter className="meter"
                                min="0" max="100"
                                low="30" high="50"
                                value="100">
                            </meter>
                        </Card.Footer>
                        <Button variant="outline-success">Success</Button>{' '}
                    </Card>
                </CardDeck>
                <CardDeck className="card__deck">
                    <Card className="card">
                        <Card.Img variant="top" src="https://tthub.io/wp-content/uploads/2020/05/github-logo-png-cat-transparent-png.png" />
                        <Card.Body>
                            <Card.Title>GIT & GITHUB</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <meter className="meter"
                                min="0" max="100"
                                low="30" high="50"
                                value="100">
                            </meter>
                        </Card.Footer>
                        <Button variant="outline-success">Success</Button>{' '}
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" />
                        <Card.Body>
                            <Card.Title>REACT.JS</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <meter className="meter"
                                min="0" max="100"
                                low="30" high="50"
                                value="100">
                            </meter>
                        </Card.Footer>
                        <Button variant="outline-success">Success</Button>{' '}
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://decodenatura.com/static/fb8aa1bb70c9925ce1ae22dc2711b343/nextjs-logo.png" />
                        <Card.Body>
                            <Card.Title>NEXT.JS</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <meter className="meter"
                                min="0" max="100"
                                low="30" high="50"
                                value="100">
                            </meter>
                        </Card.Footer>
                        <Button variant="outline-success">Success</Button>{' '}
                    </Card>
                </CardDeck>
                <CardDeck className="card__deck">
                    <Card className="card">
                        <Card.Img variant="top" src="https://www.cmswire.com/-/media/734f9fb4033b4f92b3d9babc0d72da41.ashx" />
                        <Card.Body>
                            <Card.Title>GATSBY</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <meter className="meter"
                                min="0" max="100"
                                low="30" high="50"
                                value="100">
                            </meter>
                        </Card.Footer>
                        <Button variant="outline-success">Success</Button>{' '}
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA2FBMVEXy8vL///8zMzNtp11moGA7hzljnVf09PT6+vr39/cYGBj39ff7+/v08/Tj4+Ncm1VVo0QmJiYsLCwdHR1wcHCamprQ0NC90bvQ3c+jwZ9PkE3m6uaAgIBurWKkpKRjn11WVla8vLxkZGQAAADZ2dna49lDQ0NqamqPj4+rx6nf3994eHgTExNKSkpjolG2trZaWlo5OTmDsH+4zrafv5yHsoOSuI7J2chUlkZGjkFupGitra0gfR14qXOIiIiEs3lbnkh9sHFLmECMs4sugixxo3CEroOewJY5tbaDAAAQiElEQVR4nNWde0ObyhLANzFmIQQ5QDXxxGt8NNZUja3xVa2enp7e2+//je7u8oZ9wpBw5o9WIwR+zOzM7M4AqLcBGVs2EUwFIcT+px9Y400cHLX67YSMMsmEsFqtnkNrhJaSrcjZGmYbhGPLBC6H2QolOKFl16JLxAYfm7CENZXXqioBCUHw4CGhCMfNjLMqYOYKQwiNxwRIkRCErfAxsQHOrjHhGG708QQ3NtaGhC3zQTA2ItwAX3PGJoSb4WOMWyFsz7/wpL7PqUu4WT4qdWNHPcINDcCi1ByOtQg3r8BIaplqDUJrS3xUaqjRnHAbBpqJuRpNCcdb5aNiqkZDwm2NwLwYqtGMcLsWmohZ/Dch3KaLKYqJpRoQdsFCEzGwVH3CblhoIvqWqk3YLUADRE3C7QeJqoASdhFQ199oEXbHiRZFa7qhQ9glJ1oUHUQNwu4CakUNNWGXAXUQlYTdBtRAVBF2HVCNqCDsPqDS3cgJuxomiiJHlBJ2M9BXRRr6ZYT/FkB5Aif747bP20DqEXZtNiETyUxDTPhvApQhCgm3HSdML7DQoYoItx0n8J5p44PIoYoI2zlvfbHOjpAhoxnh1geh9SEc7SOzzjETwm0PQkoY9P3+q21yJvwMlUu47UGIIsJ+P/x6a9JFxh2KXML2TlxbIkLCeHJgUKzUJdz6IEQZYT+4PtNn5Nkph7ADNpojJIyjq8+6bpVjpxzCdk9dU3KEhDF8R5rXXYewCzZaIuz3/XBf77yqdloh7MiUqUTY75/v6SGqCVs+c12pEI40CStxv0y4/VgfSW3CSgpeJmz3vPWlPmGFqJsqbEJoywg74mZQI0IkI+xGpKDShNAWE3ZHhY0IkZiwOypsRohFhB1SYTNCJCLskAobEmI+YZdU2JAQ8Qm7pMKmhDaPsFMqbEqIeISdUmFjQptD2Na51pOmhKhK2JmMNJLGhFaFsKUzrSuNCXGZsFt+BoAQlQm75WcgCO0SYTvnWV+aE6IiYSfWSPMCQDguEHbNSCEI7QJh/i+4Ga7baO/k4DUJC9vkCXPBEFt7qEFsdJ2pU58RW59xdPBahNj6mK84jnOE2ce2fez3b+vem4adxV8/3hZOzd1tfDm6OGUHr0FIdHN0/iVXxrFzhNlGpxchK2nVenyAM/u92tkZPj/OnBp7Y+u27/eD0dlHcnBzQhsfh3T3o6wDICOMPSkefz4bsa8rbKcrjrPcYTL0vKVtyojHBydhdPDwHdmmhHjMdEPE94+TyvE4JYz2tdH7da6kdYyNhqPrPO2sdmLE4fPwyWg4Egu7yg7uh8c9I0IyAGPdUAm/nkbqsVNC9pv9Gvj5rwzjEaF3hs7sr4SPEhLGt5n+cLTtfb9AFJ6cFAGlhEQ3YWH3yNKj3BRFOSmxkVjJ1e00xEG/f+zkhCJ6z/dIz1TJ6P/ql44dVE5GSEh041d2v36nESEhtImT/jSqfGc8ItSMrrPeWe2UCQmjt9YwVWphlYtbFREh0c0Nb3c/eLXZkzUQczSXPL5ou2NVwweJgH8X+VLE4fOLKjqSwf4uOrgGIdHNB9Hu4c1BosPSACxtdyGNHK4ze6jwZYjD54eZjJGGX8nBVYQ2ugzFlycYfYgI986lXx2MPokjh+Me8vgyQjIcD7FoOOLeKdfCNAnx+LUvvzzXe4zwVnWQYHTJT+RcZ7LDB8whDr3hhKtG0ejXJMwCqFjCU0b4rj6K33+tRg6SolUHIIeQRg5OIie3MBUhDaDqy+NfMsIbneOQYVtkJAPw8YeQr4TIErmCHnku3oDQxvs66g9OGOG11hGC0dVezlRdd7kSK7BCSIbj0s0hWmoLkxFyAihfrinh55F6w4jx+mN2EEdioFxEEjkyh2MfnxsYaIXQOtLTCt2LEJ5qX8zwIEf4HxVgBfHPHOG+kYVWCMtJq/iUTwmh/sGKhNJByCF83gahf0wIK1sL9y4S/mGoxN1tEAZXhLDsSsOTC8HhS4RmSvymRxiK/qBFGF6UPGxw00Pj4kc08pWnMgLCP5S+Jh/2d3UIyYxNFCQ1CP2vt72KjyZTw7wrDa5p9lKcjooJ1XaaV6GakEx8sU0SHd6x1YTB9T4799tClh1i9DFjzjJQfkZUIdRXIlGhijAYRfcfCKZDCkIaruOJPd7PmcFoDx2k3+bf5GYRdFmo/DUVQn1ns6skDL+k0+3KcoOaMIzOHdPEiZhgNqMKD9Bt8l3Be/H5lbZ9VvZBFUJdZ/OnkrC4ZEImjWUGOeEt5SOJ5D1LgKkJxlv4p+g4OZZ/XJo/WEdKQl0l7qoIw9Ni5QT3ypdXRhh8oUtNDl56nhclwOMEyz9Gl8nGtQj1lPhNg7B8cCPCkzHR4NPAGwwGc2+J3OwA/j46akSo5Wy83Q0Q4unzIBJv6WQHCN7Rp2aEOnb6bROE7tSLCYcFwiv0JdmsJqFaibEKt0NIQtBNQ0KNsL89Qr9PPNhFQ8LdZyXitqw08PfpU++/NiP8uburHokbIVw8zxngPPY0cZbTmJCc+Tcl4fMmooWzuPMIo/fy5NADnKc3vaWb1SJkBujpKVFG6JeqQIYR/6THUpqnF2+4dB12gNe0HNGI8Gdkf0pCT5m1+fu5Yh4efzwrbyDN2oJLVl9x8DpZ0svVIhpZaewl9ZyNPPP2o9wSsVLGUXWpUJ6X0jqMTdXIWZxvQhirUNPZqOaH8e2itn3Mq6Oo5oeVBV0QwgRQz9koZ8DM+1mn1UKmDiGd3fJuxMRN4uG3lFBLiRqrGCSCfRIs32qsYgQhp76CUVpNNib8mQFqKNHTW4nirxDpEdIuhddyRRej1CsbE+7mRSNibGQ1sXLvN0Yf6hL+LBCq7XS1mfXS4PqqUO7E2XJBWCG8KiceBcIioEbE8BoRXmuvCAdhPrba6Rx/dPa5bMHlNa88of3P910zJa4ecoS33BVDifj9XFeefSnf3U8aahhhtKDBbZ7BpTWvPCFypvMio9zZrHae8rVu26T8y3xsoWNSWZzLVu5sttbm+4IGKLvQpVEgpD0mu780lbhaReli7uqNBXGPx1caWuzi38raK6LVV+ZWLXQQBqH4UTCFbo4iIU0D73/90lHi6jenIUOQu3D0wX00hrJIHve3jdHn8y8fZd1duSXoMiHt9fpvzlQFEWP1t6Ad09o7Ug9HP7jlNy1h0fp/dmkuDsaoh9CtqgXaTpo6KoSsXejPX1I7Xe3wOzGiq5dvuONJ0S+Wd+/x26Gyvc8/4R7SuVkmHo4cQmKq9jo1VU7EWIm7adhJSivyweiDvAlU3u9Au2QooU5vXlQK4BLStr1/vv/iK3El74hiJ4kFtTzZdCE7MXHTWJSJ6xJSxoObcz4hbax5+c5xNqu/dXq+RZ0x8ZRPvTvf0kn8ixowtayUiW0dCwjZAsK3XyVns9rhdCa6PGReLS+qZGoJL/CkjcI2IdS/mUTWiOk4SzYccwOw2l1KfO/jlOdXoxbvsoXpnxjJAou7p/HPoh1D2l8kFdeZ/e97qsTVHadD2EGH3twrd0fFJ5nPLYzak6kUq9ajXPzrwRGy4Tj4viscgK4zmSfFIY57zeqaGj2tnN3HB1/iTvav+cvDCI2ullQIBHU2K+4AXLxRPrakOeC2uUed2MF1jdsE2O7RzQysmp99yAgh7x51nPsfv6sqom1+0XLtOuLk33ViW6++PMOSCm3nK2WwNiMEvW+NJNicAeguKR+zT2c9H9If+W3uttmDBEtCLL2kfivqgq7/lTzhGCirziY+xkH3Ee7a5Zlqs4OXd++1QVg+ZjIA3xLvQ2JGXGFochOYnsSEcK6mIsRofzOaeT7/ZhUGqsYHg7tO6ghO70ZoSxx3HVlkOfyTPwy5f4AVK7tnphWRqsqZ3UeRQzy5ai6F+57ARTXcMC34iSMHyCmkhG08T0HuMpmUnCy8ZPeuwQ9EmqJJwl4iWaCUzpPrSnb/IbiZOtM3ppw7lQFmyc5TC4jc+4BBxJ08x2etMQGO4iXrLwAWnCMENlNn4tHmK1fvnIlFD+aD+SE4oSW6H7+5UEJvIVAgdh0qbn79HA3aIGzxmQqMcJZ9J2Vy459sNJ2sl8vJFGVXwG2FELf4XIwSobt4fHxcUB7Xnbx5iTykCxrtEFoFQlgzLRNOvbk3pdOKxYs3HyRCcp14ItIOYa9ICGqmVcIBJXRn8zkjo8J+eommO60Qlp9PA5qbCgidOxZDHpeTp6fJ8oX+8siwWiEclwhBlcgndGckhgyfmCsl/7iPNKREw7MFwspzomBXa/iE9NNJyoGdt/kgivNtEFaf9QXpa/iEzppFSZT7eB6ZaRuEvSohoBIFhOTTOZkqOnHB2kWPh4frlgh5z9wD9DUCK11E0+H1YoajrIb+yzaAJ+xxCAF9jShaeIM4WLzcEYe6SBKdFgi5z74EVKIoWkzSeD+nnPP7+Ek98IQ9LiGcEgWEJKd5pGDzLKtZt2OlgmfQwilRREhT8MX6/u4l5WwpWowFhGBKFBKiZJ6xmBy+MZNlIR+aUPgsaDAlCnxp4jrjOeLsnuY4FAyasCckhFIil9B5mr8M8ksVrvNIpvYP8IRYQgikRD7hwot4ss3WXiuEPQkhkBIF45ANu9zaRpqYwhJK340AlJ0KsrZ7uoI6ieYW9N+l14qnKROVfgfJTvmEeBaVue/u4wkiTeLuwKOF6h0lIEoU5TRPXprPRAFxPmBbQRIq3zMD4myEOc3U8wa5dRrvYcZGJSRh5Z1WrbzvSRjxndnyJVlqm98tkzV/QEKN9z1B2GlEmC2HZjkNmTDNFlRmKF1DpY9lBSPk4FQ/ar52yua6WXW3kLWRfIYKzi2Ik9k/1Kq+3nvXmtspDeW56i5T6VRcRZxSr+rdAxBqvjuvuZ26s7QviEY7FtkXgiqGM3uIK8UADoALw/uwsZ3mq7sOeqAq4j9BmTXzySvFBqL/DkuAuJ9Wd99YMX/ItcG4mW/u3YOUuQ3eQwrhT5PqbrSQP+c0O7lJbRSoVcHoXbIgqQ2r7kYz+Xl1FObr2zBtCiISwecg5TZihS/RilOFgT5qBbZHwfSdzkALxCzAs/uPC56EFraB+0z4g1BGCDXfxxSNpDLTzBjb6BWq8W51yEIGZunoQ8STDkDIfi8xoIwQDpFEDi9pH0rDCGjPnoxC8jfARfC4TW++bqfvUgIhJQTsX0iH3qCN3lmRG1UTQlbc4kQuXssHbdQrr1uYEAL38dMRqGrmMxc5oIoQFJF5UWUzn6kIA6EmIWzvKRmO0J2kKkA1IXB7LXSnrBJQg7Brb2QriGIMahJ2GFEDUIuws4jSOGhE2L1XejHRAtQk7Nyr9ajonbkuYfdePSeZTdQk7Nir2bQBDQg75W/UYbAOYYf8jZ6PMSfsymDUt1Bzwk5YqoGF1iDsgKWaWGgdwm37VEMF1iLcqhpNFViPcHtqNFdgXcLtqNHMhTYk3IZT1ZkpQRJu2lRrGWhDwl7t51eYS00DbUq4McYmfA0JictpnxHXiBCAhK3rsZn+QAgJY3t+tb5/yQSAsNdS7MB140NRYAhbMFa74fBLBYqwB+p1gNTHBJCwBwQJideDJuw1hcRgxpkKOGGPOtd6lMDKi6UNQiaWESa2W6Gj0hohlTHBVHHiFuGYtEoYy5iQ2oQ1psVMyCcW+Jjjyf8B9GjAX1hJ3d0AAAAASUVORK5CYII=" />
                        <Card.Body>
                            <Card.Title>NODE.JS</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <meter className="meter"
                                min="0" max="100"
                                low="30" high="50"
                                value="100">
                            </meter>
                        </Card.Footer>
                        <Button variant="outline-success">Success</Button>{' '}
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://www.pngitem.com/pimgs/m/31-312155_c-programming-language-logo-hd-png-download.png" />
                        <Card.Body>
                            <Card.Title>C LANGUAGE</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <meter className="meter"
                                min="0" max="100"
                                low="30" high="50"
                                value="100">
                            </meter>
                        </Card.Footer>
                        <Button variant="outline-success">Success</Button>{' '}
                    </Card>
                </CardDeck>
                <CardDeck className="card__deck">
                    <Card className="card">
                        <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                        <Card.Body>
                            <Card.Title>PYTHON</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <meter className="meter"
                                min="0" max="100"
                                low="30" high="50"
                                value="100">
                            </meter>
                        </Card.Footer>
                        <Button variant="outline-success">Success</Button>{' '}
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.freebiesupply.com/images/large/2x/linux-logo-png-transparent.png" />
                        <Card.Body>
                            <Card.Title>GNU/LINUX</Card.Title>
                            <Card.Text>
                               
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <meter className="meter"
                                min="0" max="100"
                                low="30" high="50"
                                value="100">
                            </meter>
                        </Card.Footer>
                        <Button variant="outline-success">Success</Button>{' '}
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://yosoy.dev/wp-content/uploads/2013/02/jquery_logo.jpg" />
                        <Card.Body>
                            <Card.Title>JQUERY</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <meter className="meter"
                                min="0" max="100"
                                low="30" high="50"
                                value="100">
                            </meter>
                        </Card.Footer>
                        <Button variant="outline-success">Success</Button>{' '}
                    </Card>
                </CardDeck>
            </h2>
        </div>
    )
}

export default Skills
