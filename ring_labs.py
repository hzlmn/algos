def run_tests(n):
    if n > 3000:
        return False
    else:
        return True


def check_commits_improved(n):
    left = 1
    right = n
    last_failed = None
    while left <= right:
        median = left + (right - left) / 2

        if left == last_failed:
            return left

        if not run_tests(median):
            last_failed = median
            right = median
        else:
            left = median + 1
    return -1


print(check_commits_improved(1000000000))
