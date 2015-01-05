# https://devcenter.heroku.com/articles/scheduler
desc "Get updated data from MLS"
task :mls_refresh => :environment do
  puts 'Mls.refresh...'
  Mls.refresh
  puts 'Done.'
end
