export type Writing = {
  title: string;
  summary: string;
  href: string;
  publication: string;
  topics: string[];
};

export const writings: Writing[] = [
  {
    title: 'How GPUs Accelerate Scientific Computing',
    summary:
      'A technical article on GPU acceleration and scientific computing workloads.',
    href: 'https://hawk09os.substack.com/p/how-gpus-accelerate-scientific-computing',
    publication: 'hawk09os.substack.com',
    topics: ['GPU Computing', 'Scientific Computing', 'CUDA'],
  },
];
