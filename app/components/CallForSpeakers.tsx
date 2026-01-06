export default function CallForSpeakers() {
    return (
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfRlbtegrypHBHw8sHVy_FEcIYLGBo6i5ZETeLxY6NFfSnYjw/viewform" target="_blank">
        <div className='bg-dark-card rounded-bento p-5 md:p-8 border border-dark-border bento-card relative overflow-hidden group flex flex-col justify-between'>
            <div className='relative z-20'>

                <p className='text-3xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight'>
                    Call for Speakers 
                </p>
                <p className='text-3xl md:text-2xl font-extrabold leading-tight mb-6 tracking-tight text-gradient'>
                    D3 Community is hosting meetups!!
                </p>

                <p className='text-lg text-dark-muted mb-8 max-w-md leading-relaxed'>
                    Would you like to be a speaker at our meetups?
                    <br />
                    Let us know with this form.
                </p>

            </div>
        </div>
        </a>
    );
}
