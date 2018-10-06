import React, { Component, Fragment } from 'react'

import Icon from '../Icon'
import Button from '../Button'

import ImageHero from '../../assets/images/image-hero.jpg'
import ImageFamily from '../../assets/images/image-family.png'
import ImageBookshelf from '../../assets/images/image-bookshelf.png'
import ImageBook from '../../assets/images/image-book.png'
import ImageMonsters from '../../assets/images/image-monsters.png'

import { BUTTON_VARIATIONS } from '../../constants/Button'

import '../../assets/stylesheets/index.css'
import '../../assets/stylesheets/transition.css'

class Layout extends Component {
  onClick () {
    this.showModal()
  }

  render () {
    return (
      <Fragment>
        {/* Header */}
        <header className='z-10 fixed w-full bg-white flex items-center justify-between border-b border-solid border-grey-lighter p-10'>
          <h1 className='font-display text-3xl text-grey-black'>
            Bedtime Stories
          </h1>
          <nav className='font-display font-base font-medium'>
            <a className='animate animate-100 inline-block text-grey-darker hover:text-purple no-underline hover:bg-grey-lightest rounded-lg ml-2 p-4' href='#'>
              Home
            </a>
            <a className='animate animate-100 inline-block text-grey-darker hover:text-purple no-underline hover:bg-grey-lightest rounded-lg ml-2 p-4' href='#'>
              Library
            </a>
          </nav>
        </header>
        {/* Hero */}
        <div className='container mx-auto bg-white pt-10 flex'>
          <div className='max-w-sm flex flex-col justify-center mr-20 min-h-screen'>
            <h2 className='font-display font-bold text-black text-5xl mb-6 leading-tight'>
              The storytelling app for families
            </h2>
            <p className='font-display font-medium text-grey-dark text-3xl mb-6 leading-normal'>
              Awake the inner storyteller with diverse and empowering stories for young & old. Storytelling has never been easier.
            </p>
            <div>
              <Button onClick={this.onClick}>How does it work?</Button>
              <Button className='ml-3' variation={BUTTON_VARIATIONS.OUTLINED}>Explore Library</Button>
            </div>
            <a className='font-display font-bold text-purple text-sm mt-6' href='#'>
              <Icon className='fill-current text-purple w-5 h-5 align-middle' name='badge' /> Parents' Choice Approved App
            </a>
          </div>
          <div className='flex-1 flex-shrink flex-grow flex flex-col justify-center ml-20 min-h-screen'>
            <img className='w-full' src={ImageHero} />
            <p className='font-display font-medium text-grey-dark text-xs mt-5 text-center'>
              <a className='underline text-grey-dark hover:text-purple' href='#'>Karlotta the Knight</a> with her squire and steed.
            </p>
          </div>
        </div>
        {/* Features */}
        <div className='bg-grey-lightest w-full p-24'>
          <div className='container mx-auto flex'>
            <div className='flex-1 pr-10'>
              <img className='mb-5 w-24' src={ImageFamily} />
              <h4 className='font-display text-2xl text-black mb-5'>Quality Family Time</h4>
              <p className='font-display text-lg font-medium leading-loose text-grey-dark'>Storytelling plays a vital role when growing up. Create lasting memories and embark on fantastic journeys with beloved characters.</p>
            </div>
            <div className='flex-1 px-5'>
              <img className='mb-5 w-24' src={ImageBookshelf} />
              <h4 className='font-display text-2xl text-black mb-5'>Teach Valuable Life Lessons</h4>
              <p className='font-display text-lg font-medium leading-loose text-grey-dark'>We deeply care about diversity and empowerment - each Storyworld contains educational aspects and storytelling tips to teach valuable life lessons.</p>
            </div>
            <div className='flex-1 pl-10'>
              <img className='mb-5 w-24' src={ImageBook} />
              <h4 className='font-display text-2xl text-black mb-5'>A Safety Net for Storytelling</h4>
              <p className='font-display text-lg font-medium leading-loose text-grey-dark'>Each story includes an easy-to-remember summary of Storypoints and the interactive Storybuilder generates millions of exciting storylines.</p>
            </div>
          </div>
        </div>
        {/* Subscription */}
        <div className='bg-purple w-full p-16'>
          <div className='container mx-auto flex items-center'>
            <div className='flex-1'>
              <h3 className='font-display text-white text-3xl mb-2'>
                Stay in the know
              </h3>
              <p className='font-display text-white text-lg'>
                Receive must-read articles and feature updates
              </p>
            </div>
            <div className='flex-1 flex'>
              <input className='flex-1 rounded-lg p-4 font-display font-medium text-lg mr-2 opacity-75 text-black focus:opacity-100 animate animate-100' type='text' placeholder='Enter your email' />
              <Button theme='INVERTED' outlined>Subscribe</Button>
            </div>
          </div>
        </div>
        {/* Metrics */}
        <div className='container mx-auto py-24'>
          <h2 className='font-display text-center text-5xl text-black mb-8'>Your favorite stories to fall in love with</h2>
          <p className='font-display text-lg font-medium mb-16 leading-normal text-grey-dark w-2/5 text-center mx-auto'>To really encourage storytelling and reading, you have to fall in love with the characters and the story. We will provide a constant stream of exciting new Storyworlds in every imaginable genre - falling in love guaranteed!</p>
          <div className='flex w-3/5 mx-auto mb-16'>
            <div className='flex-1'>
              <h3 className='font-display text-5xl text-black font-bold mb-2 text-center'>27x</h3>
              <p className='font-display text-md font-medium text-grey-dark text-center'>Storyworlds</p>
            </div>
            <div className='flex-1'>
              <h3 className='font-display text-5xl text-black font-bold mb-2 text-center'>140x</h3>
              <p className='font-display text-md font-medium text-grey-dark text-center'>Stories</p>
            </div>
            <div className='flex-1'>
              <h3 className='font-display text-5xl text-black font-bold mb-2 text-center'>28.7h</h3>
              <p className='font-display text-md font-medium text-grey-dark text-center'>of Storytime</p>
            </div>
            <div className='flex-1'>
              <h3 className='font-display text-5xl text-black font-bold mb-2 text-center'>50M+</h3>
              <p className='font-display text-md font-medium text-grey-dark text-center'>possible stories</p>
            </div>
          </div>
          <Button className='mx-auto mb-8' block>Browse our Library</Button>
          <p className='font-display font-medium text-grey-dark text-xs mt-5 text-center' href='#'>
            <Icon className='fill-current text-grey-dark w-4 h-4 align-middle' name='notification' /> We’re releasing new Storyworlds <a className='underline text-grey-dark hover:text-purple' href='#'>every two weeks</a>.
          </p>
        </div>
        {/* Hero */}
        <div className='bg-grey-lightest w-full p-24 pb-0'>
          <div className='container mx-auto'>
            <h2 className='font-display text-center text-5xl text-black mb-8'>Don't be shy, say hi!</h2>
            <p className='font-display text-lg font-medium mb-8 leading-normal text-grey-dark w-2/5 text-center mx-auto'>We might deal with trolls, werewolfs and huge dogs, but we don’t bite.</p>
            <Button className='mx-auto mb-8' block>Get in touch</Button>
            <img className='w-3/5 mx-auto block' src={ImageMonsters} />
          </div>
        </div>
        {/* Footer */}
        <footer className='p-24 flex font-display'>
          <div className='flex-1'>
            <h2 className='text-3xl text-black mb-4'>Bedtime Stories</h2>
            <p className='text-md text-grey-dark leading-loose font-medium w-3/5 mb-4'>The storytelling app for families - read diverse & empowering stories or tell them in your own words.</p>
            <p className='text-md text-grey-dark leading-loose font-medium w-3/5'>© Little Light Studio GmbH</p>
          </div>
          <div className='w-48 ml-4'>
            <h4 className='text-black text-xl ml-3 mb-3'>Product</h4>
            <ul className='list-reset font-base font-medium'>
              <li>
                <a className='no-underline animate animate-100 block text-grey-darker hover:text-purple hover:bg-grey-lightest rounded-lg p-3' href='#'>
                  Home
                </a>
              </li>
              <li>
                <a className='no-underline animate animate-100 block text-grey-darker hover:text-purple hover:bg-grey-lightest rounded-lg p-3' href='#'>
                  Library
                </a>
              </li>
            </ul>
          </div>
          <div className='w-48 ml-4'>
            <h4 className='text-black text-xl ml-3 mb-3'>Company</h4>
            <ul className='list-reset font-base font-medium'>
              <li>
                <a className='no-underline animate animate-100 block text-grey-darker hover:text-purple hover:bg-grey-lightest rounded-lg p-3' href='#'>
                  Blog
                </a>
              </li>
              <li>
                <a className='no-underline animate animate-100 block text-grey-darker hover:text-purple hover:bg-grey-lightest rounded-lg p-3' href='#'>
                  About Us
                </a>
              </li>
              <li>
                <a className='no-underline animate animate-100 block text-grey-darker hover:text-purple hover:bg-grey-lightest rounded-lg p-3' href='#'>
                  Press Kit
                </a>
              </li>
              <li>
                <a className='no-underline animate animate-100 block text-grey-darker hover:text-purple hover:bg-grey-lightest rounded-lg p-3' href='#'>
                  Imprint
                </a>
              </li>
              <li>
                <a className='no-underline animate animate-100 block text-grey-darker hover:text-purple hover:bg-grey-lightest rounded-lg p-3' href='#'>
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className='w-48 ml-4'>
            <h4 className='text-black text-xl ml-3 mb-3'>Connect with us</h4>
            <ul className='list-reset font-base font-medium'>
              <li>
                <a className='no-underline animate animate-100 block text-grey-darker hover:text-blue-dark hover:bg-grey-lightest rounded-lg p-3' href='#'>
                  <Icon className='fill-current w-5 h-5 text-blue-dark inline-block mr-2 align-top' name='facebook' />Facebook
                </a>
              </li>
              <li>
                <a className='no-underline animate animate-100 block text-grey-darker hover:text-blue hover:bg-grey-lightest rounded-lg p-3' href='#'>
                  <Icon className='fill-current w-5 h-5 text-blue inline-block mr-2 align-top' name='messenger' />Messenger
                </a>
              </li>
              <li>
                <a className='no-underline animate animate-100 block text-grey-darker hover:text-red-light hover:bg-grey-lightest rounded-lg p-3' href='#'>
                  <Icon className='fill-current w-5 h-5 text-red-light inline-block mr-2 align-top' name='instagram' />Instagram
                </a>
              </li>
              <li>
                <a className='no-underline animate animate-100 block text-grey-darker hover:text-blue-light hover:bg-grey-lightest rounded-lg p-3' href='#'>
                  <Icon className='fill-current w-5 h-5 text-blue-light inline-block mr-2 align-top' name='twitter' />Twitter
                </a>
              </li>
              <li>
                <a className='no-underline animate animate-100 block text-grey-darker hover:text-black hover:bg-grey-lightest rounded-lg p-3' href='#'>
                  <Icon className='fill-current w-5 h-5 text-black inline-block mr-2 align-top' name='medium' />Medium
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </Fragment>
    )
  }
}

export default Layout
