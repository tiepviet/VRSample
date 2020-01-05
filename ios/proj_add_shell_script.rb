require 'xcodeproj'
project_name = ARGV[0]
path_to_project = "#{project_name}.xcodeproj"
project = Xcodeproj::Project.open(path_to_project)

project.targets.each do |target|
  target.build_configurations.each do |config|
    config.build_settings['ENABLE_BITCODE'] = 'NO'
    config.build_settings['DEAD_CODE_STRIPPING'] = 'YES'
  end
end


project.save()
