name: Hi Intel
on: push
env:
  username: Mona
  super_duper_var: totally_awesome

jobs:
  windows_job:
    runs-on: windows-latest
    steps:
      - run: echo 'Hi ${{ env.username }}'  # Hi Mona
      - run: echo 'Hi ${{ env.username }}'  # Hi Octocat
        env:
          username: Octocat
  linux_job:
    runs-on: ubuntu-latest
    env:
      username: Tux
    steps:
      - run: echo 'Hi ${{ env.username }}'  # Hi Tux
