import { useRouter } from 'next/router';

import { proposals } from '../../mock/proposals';
import Proposal from './DetailVoting/Proposal';

function DetailVoting() {
  const router = useRouter();

  function handleClick(id: string) {
    router.push({
      pathname: `/voting/${id}`,
    });
  }

  return (
    <section className="flex flex-col">
      <div className="flex justify-between mt-[32.5px] mb-[32.5px]">
        <h2 className="text-2xl	font-bold">Proposals</h2>
        {/* <button className="flex gap-1 items-center">
          <Add />
          New proposal
        </button> */}
      </div>
      <div className="grid gap-4 w-full mb-16">
        {proposals.data.map((e, i) => {
          return (
            <Proposal
              key={e.id}
              onClick={() => handleClick(e.id)}
              title={e.title}
              contents={
                e.contents.length >= 180 ? e.contents.substring(0, 180) + '...' : e.contents
              }
              address={e.address}
              isOpen={e.isOpen}
              votingOptions={e.votingOptions}
            />
          );
        })}
      </div>
    </section>
  );
}

export default DetailVoting;
