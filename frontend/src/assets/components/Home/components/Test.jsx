import React from 'react';
import "./Test.css";

export default function Test() {
  return (
    <div className="mental-health-test-container">
      <div className="headline-container">
        <h1 className="headline">
          Discover Your Mental Health Status Today!
        </h1>
        <p className="subheadline">
          Take our quick tests to see if you might be experiencing symptoms of common mental health conditions.
        </p>
      </div>
      <section className="articles">
        <article>
          <div className="article-wrapper">
            <figure>
              <img src="https://picsum.photos/id/1011/800/450" alt="Anxiety Test" />
            </figure>
            <div className="article-body">
              <h2>Anxiety Test</h2>
              <p>
                Are you feeling overwhelmed with worry or fear? Take this test to find out if you have symptoms of anxiety.
              </p>
              <a href="#" className="read-more">
                Read more <span className="sr-only">about Anxiety Test</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src="https://picsum.photos/id/1005/800/450" alt="Depression Test" />
            </figure>
            <div className="article-body">
              <h2>Depression Test</h2>
              <p>
                Are you experiencing persistent sadness or a lack of interest in activities? This test can help you identify symptoms of depression.
              </p>
              <a href="#" className="read-more">
                Read more <span className="sr-only">about Depression Test</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src="https://picsum.photos/id/103/800/450" alt="PTSD Test" />
            </figure>
            <div className="article-body">
              <h2>PTSD Test</h2>
              <p>
                Have you experienced a traumatic event and are now feeling stressed or anxious? Take this test to see if you might have PTSD.
              </p>
              <a href="#" className="read-more">
                Read more <span className="sr-only">about PTSD Test</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src="https://picsum.photos/id/1042/800/450" alt="Bipolar Disorder Test" />
            </figure>
            <div className="article-body">
              <h2>Bipolar Disorder Test</h2>
              <p>
                Do you experience extreme mood swings, from high energy to deep depression? This test can help identify symptoms of bipolar disorder.
              </p>
              <a href="#" className="read-more">
                Read more <span className="sr-only">about Bipolar Disorder Test</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
