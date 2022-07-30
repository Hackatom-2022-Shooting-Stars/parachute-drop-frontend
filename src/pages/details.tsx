import type { NextPage } from 'next';
import Head from 'next/head';
import CardSpace from '@src/components/main/CardSpace';
import Navbar from '@src/components/common/Navbar';
import { totalmem } from 'os';

const total = 300.0;
const amounts = [
  { label: 'Claimable', amount: 100.0 },
  { label: 'Unvested', amount: 200.0 },
  { label: 'Total', amount: total },
];

const Details: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        {/* 프로필 영역 */}
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div>
            <div className="flex">
              <h1>ENS</h1>
              <p>
                $<span>ENS</span>
              </p>
            </div>
            <p>About ENS Here About ENS Here About ENS Here</p>
            <div>
              <a>link.com/dksfajdsfklj</a>
            </div>
            <div>
              <a>link.com/dksfajdsfklj</a>
            </div>
          </div>
        </div>
        {/* 에어드롭 영역 */}
        <div className="flex items-center">
          <div className="grow">
            <h2>Airdrop</h2>
          </div>
          <div className="flex-none">
            <div className="flex items-center">
              <div>
                <span>100.00</span>
                <span> ENS</span>
              </div>
              <div>
                <button className="btn btn-primary">Claim</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-500">
          <p>1/3 Round</p>
          {amounts.map((amount, index) => {
            return (
              <>
                <div>
                  <span>{amount.label}</span>
                  <span>{amount.amount}</span>
                </div>
                <div
                  style={{
                    backgroundColor: 'red',
                    height: '20px',
                    width: `${(amount.amount / total) * 100}%`,
                  }}
                >
                  {amount.amount}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Details;