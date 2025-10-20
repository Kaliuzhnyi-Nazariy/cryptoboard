import React from "react";

const DashboardHelp = () => {
  return (
    <>
      {/* <div className="text-start mt-4 mts flex flex-col gap-4"> */}
      <>
        <h3 className="elts">Dashboard Overview</h3>
        <ul className="flex flex-col gap-2">
          <li>
            <h5 className="lts">Statistic section</h5>
            <article className="flex flex-col gap-2">
              <p>Your dashboard displays three key financial indicators: </p>
              <ul className="flex flex-col gap-1 list-disc ml-5">
                <li>
                  Balance – shows your current wallet amount. The percentage
                  compares your total top-ups with your current balance.
                </li>
                <li>
                  Spending – displays the total amount of money you’ve spent
                  buying tokens. The percentage shows your spending in relation
                  to all top-ups and sales.
                </li>
                <li>
                  Returns – represents the total amount you’ve earned over time.
                  The percentage compares your current token value with your
                  total spending.
                </li>
              </ul>
            </article>
          </li>
          <li className="mt-3">
            <h5 className="lts">Statistic graph</h5>
            <article>
              View how your spending and earnings have changed over time. You
              can toggle between <b>Spent</b> and <b>Earned</b> to see your
              monthly data for each year since your account was created.
            </article>
          </li>
          <li className="mt-3">
            <h5 className="lts">Trending Market</h5>
            <article>
              <p>
                This section displays the four most popular tokens in the
                market.
              </p>
              <p>For each token, you can view:</p>
              <ul className="list-disc ml-5">
                <li>Last price</li>
                <li>24-hour price change</li>
                <li>Market capitalization</li>
              </ul>
              <p className="mt-1">
                You can also click
                <span className="text-[var(--primary100)]"> View All</span> to
                open the full market page and explore more details.
              </p>
            </article>
          </li>
          <li className="mt-3">
            <h5 className="lts">Trade field</h5>
            <article>
              <p>Buy or sell tokens directly from the dashboard.</p>
              <p>Steps:</p>
              <ul className="list-decimal ml-5">
                <li>
                  <p>Switch between the Buy and Sell tabs.</p>
                </li>
                <li>
                  <p>Choose token.</p>
                </li>
                <li>
                  <p>
                    Enter either the amount of money or number of tokens.
                    <small>
                      * The other field updates automatically based on the
                      current market price.
                    </small>
                  </p>
                </li>
              </ul>
            </article>
          </li>
          <li className="mt-3">
            <h5 className="lts">Quick transfer</h5>
            <article>
              This feature is currently not active and serves as a placeholder
              for future updates.
            </article>
          </li>
          <li className="mt-3">
            <h5 className="lts">New Cryptocurrency</h5>
            <article>
              This is a mock-up section reserved for upcoming functionality.
            </article>
          </li>
        </ul>
      </>
    </>
  );
};

export default DashboardHelp;
